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
        public Cliente Eliminar(string identificacion)
        {
            try
            {
                
                var cliente = _context.Clientes.Find(identificacion);
                if (cliente!= null)
                {
                    _context.Clientes.Remove(cliente);
                    _context.SaveChanges();
                    return cliente;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception e)
            {

                return null;
            }
            

        }
        public GuardarClienteResponse Modificar(Cliente cliente){
            var clienteAntiguo = _context.Clientes.Find(cliente.Identificacion);
            if(clienteAntiguo !=null){
                clienteAntiguo.Nombres = cliente.Nombres;
                clienteAntiguo.PrimerApellido = cliente.PrimerApellido;
                clienteAntiguo.SegundoApellido = cliente.SegundoApellido;
                clienteAntiguo.Telefono= cliente.Telefono;
                clienteAntiguo.Correo= cliente.Correo;
                clienteAntiguo.Direccion=cliente.Direccion;
                clienteAntiguo.Celular=cliente.Celular;
                _context.Clientes.Update(clienteAntiguo);
                _context.SaveChanges();
                return new GuardarClienteResponse(cliente);
            }

            return new GuardarClienteResponse($"Error de la Aplicacion: {cliente.Identificacion} no se encuentra registrado.");
        }

    
        public Cliente BuscarCliente (string identificacion) {
            var clientebuscado = _context.Clientes.Find(identificacion);
            return clientebuscado;
        }

         public int Totalizar()
        {
            return _context.Clientes.Count();
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