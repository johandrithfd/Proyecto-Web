using System.Linq;
using System;
using Microsoft.AspNetCore.Mvc;
using Logica;
using Entidad;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using veterinariadotnet.Models;
using Datos;
using System.Linq;
using Microsoft.AspNetCore.Http;

namespace veterinariadotnet.Controllers
{  
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController: ControllerBase
    {
        private readonly ClienteServicio _clienteService;
        

        public ClienteController(VeterinariaContext context)
        {
            
            _clienteService = new ClienteServicio(context);
        }
        
        [HttpGet]
        public IEnumerable<ClienteViewModel>GetAll()
        {
            var clientes = _clienteService.ConsultarClientes().Select(c=> new ClienteViewModel(c));
            return clientes;
        }

        [HttpPost]
        public ActionResult<ClienteViewModel> Post(ClienteModel clienteimputModel)
        {
            Cliente cliente = Mapear(clienteimputModel);
            var response = _clienteService.Guardar(cliente);
            if (response.Error) 
            {
                return BadRequest("sadasd error : "+ response.Mensaje);
            }
            return Ok(response.Cliente);
        }
        
        private Cliente Mapear(ClienteModel clienteimputModel)
        {
            var cliente = new Cliente
            {
                Identificacion= clienteimputModel.Identificacion,
                Nombres = clienteimputModel.Nombres,
                PrimerApellido= clienteimputModel.PrimerApellido,
                SegundoApellido = clienteimputModel.SegundoApellido,
                Telefono = clienteimputModel.Telefono,
                Celular = clienteimputModel.Celular,
                Direccion = clienteimputModel.Direccion,
                Correo = clienteimputModel.Correo,
            };
            return cliente;
        }
        
        


    } 
}
