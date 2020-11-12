using System;
using Logica;
using Entidad;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using veterinariadotnet.Models;
using Datos;

namespace veterinariadotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicioController :  ControllerBase
    {
        private readonly ServicioVeterinariaServicio _servicio;
        public ServicioController(VeterinariaContext context)
        {
            _servicio = new ServicioVeterinariaServicio(context);
        }
        [HttpPost]
        public ActionResult<ServicioViewModel> Post(ServicioInputModel servicioInputModel)
        {
            Servicio servicio = MapearServicio(servicioInputModel);
            var respuesta = _servicio.Guardar(servicio);
            if (respuesta.Error) 
            {
                return BadRequest(respuesta.Mensaje);
            }
            return Ok(respuesta.Servicio);
        }
        private Servicio MapearServicio(ServicioInputModel servicioInputModel)
        {
            var servicio = new Servicio
            {
                Nombre = servicioInputModel.Nombre,
                Valor = servicioInputModel.Valor,
                Descripcion = servicioInputModel.Descripcion
            };
            return servicio;
        }
        [HttpGet]
        public ActionResult<IEnumerable<ServicioViewModel>> Gets()
        {
            var respuestaServicio = _servicio.ConsultarServicios();
            if(respuestaServicio.Error)
            {
                return BadRequest(respuestaServicio.Mensaje);
            }
            return Ok(respuestaServicio.Servicios);
            
        }
    }
}
