using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using Datos;
using Entidad;
using System.Linq;
using System.Security.Permissions;


namespace Logica
{
    public class ClienteServicio {
        private readonly  VeterinariaContext  _context;

        public ClienteServicio (VeterinariaContext context) {
            _context=context;
        }
        public GuardarClienteResponse Guardar (Cliente cliente) {
            try
            {
                
                var clientebuscado = _context.Clientes.Find(cliente.Identificacion);
                if(clientebuscado!= null){
                    return new GuardarClienteResponse("Error El cliente Ya se encuentra registrado");
                }
                 

                _context.Clientes.Add(cliente);
                _context.SaveChanges();
                
                
                return new GuardarClienteResponse(cliente);
            }
           
            catch (Exception e)
            {
                return new GuardarClienteResponse($"Error de la Aplicacion: {e.Message}");
            }
            
        }
        
        public List<Cliente> ConsultarClientes () {
            List<Cliente> clientes = _context.Clientes.ToList();;
            return clientes;
        }

    }
    public class GuardarClienteResponse {
        public GuardarClienteResponse (Cliente cliente) {
            Error = false;
            Cliente  = cliente;
        }
        public GuardarClienteResponse (string mensaje) {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Cliente Cliente { get; set; }
    }

}