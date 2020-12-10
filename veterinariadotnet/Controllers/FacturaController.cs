using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Logica;
using Entidad;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using veterinariadotnet.Models;
using Datos;
using System.Text.Json;
using System.Text.Json.Serialization;
namespace veterinariadotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FacturaController : ControllerBase
    {
        public FacturaServicio _facturaServicio ;
        public FacturaController(VeterinariaContext context)
        {
            _facturaServicio = new FacturaServicio(context);
        }

        [HttpPost]
        public ActionResult<Respuesta<FacturaViewModel>> Post(FacturaInputModel facturaInputModel)
        {
            
            Factura factura = Mapear(facturaInputModel);
            var response = _facturaServicio.Guardar(factura);
            if (response.Error) 
            {
                return BadRequest(response);
            }

            return Ok(response);
        }
        
        

        [HttpGet]
        public ActionResult<RespuestaConsulta<FacturaViewModel>> Get()
        {
            var respuesta = _facturaServicio.Consutar();
            if (respuesta.Error)
            {
                return BadRequest(respuesta);
            }
            return Ok(respuesta);
        }
        private Factura Mapear(FacturaInputModel facturaInputModel)
        {
            var factura = new Factura
            {
                DetallesFactura = facturaInputModel.DetallesFactura,
                Fecha = DateTime.Now,
                Identificacion = facturaInputModel.Identificacion
            };
            return factura;
        }
    }
}
