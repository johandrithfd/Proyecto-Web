using System.Linq;
using System;
using Microsoft.AspNetCore.Mvc;
using Logica;
using Entidad;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using veterinariadotnet.Models;

namespace veterinariadotnet.Controllers
{  
   [Route("api/[controller]")]
   [ApiController]
    public class ClienteController: ControllerBase
    {
        private readonly ClienteServicio _clienteService;
        public IConfiguration Configuration { get; }
        public ClienteController(IConfiguration configuration)
        {
            Configuration = configuration;
            string connectionString = Configuration["ConnectionStrings:DefaultConnection"];
            _clienteService = new ClienteServicio(connectionString);
        }
        
        [HttpGet]
        public IEnumerable<ClienteViewModel>GetAll()
        {
            var personas = _clienteService.ConsultarClientes().Select(c=> new ClienteViewModel(c));
            return personas;
        }

        [HttpPost]
        public ActionResult<ClienteViewModel> Post(ClienteModel clienteimputModel)
        {
            Cliente cliente = Mapear(clienteimputModel);
            var response = _clienteService.Guardar(cliente);
            if (response.Error) 
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Cliente);
        }
        
        private Cliente Mapear(ClienteModel clienteimputModel)
        {
            var cliente = new Cliente
            {
                Identificacion = clienteimputModel.Identificacion,
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
