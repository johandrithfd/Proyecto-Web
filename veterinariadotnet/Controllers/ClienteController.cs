using System.Linq;
using System;
using Microsoft.AspNetCore.Mvc;
using Logica;
using Entidad;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using veterinariadotnet.Models;
using Datos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SignalR;
using veterinariadotnet.Hubs;
using System.Threading.Tasks;

namespace veterinariadotnet.Controllers
{  
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController: ControllerBase
    {
        private readonly ClienteServicio _clienteService;
        private readonly IHubContext<SignalHub> _hubContext;
        

        public ClienteController(VeterinariaContext context,IHubContext<SignalHub> hubContext)
        {
            _clienteService = new ClienteServicio(context);
            _hubContext = hubContext;
        }
        
        [HttpGet]
        public IEnumerable<ClienteViewModel>GetAll()
        {
            var clientes = _clienteService.ConsultarClientes().Select(c=> new ClienteViewModel(c));
            return clientes;
        }
        [HttpGet("{identificacion}")]
        public ActionResult<Cliente> BuscarCliente(string identificacion)
        {
            var cliente = _clienteService.BuscarCliente(identificacion);
            return cliente;
        }

        [HttpDelete("{identificacion}")]
        public ActionResult<string> Delete(string identificacion)
        {
            var cliente = _clienteService.Eliminar(identificacion);
            
            return Ok(cliente);
        }

        [HttpPut]
        public ActionResult<ClienteViewModel> Put(Cliente cliente)
        {
            var response = _clienteService.Modificar(cliente);
            if (response.Error)
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Cliente);
            
        }




        [HttpPost]
        public  async Task<ActionResult<ClienteViewModel>> PostAsync(ClienteModel clienteimputModel)
        {
            Cliente cliente = Mapear(clienteimputModel);
            var response = _clienteService.Guardar(cliente);
            if (response.Error) 
            {
                ModelState.AddModelError("Guardar Persona", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            var clienteViewModel = new ClienteViewModel(cliente);
            await _hubContext.Clients.All.SendAsync("ClienteRegistrado",  clienteViewModel);
            return Ok(clienteViewModel);
            
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
