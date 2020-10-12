using System;
using Entidad;
using Datos;
using System.Collections.Generic;

namespace Logica
{
    public class ClienteServicio {
        private readonly AdministradorDeConexion _conexion;
        private readonly ClienteRepositorio _repositorio;
        public ClienteServicio (string connectionString) {
            _conexion = new AdministradorDeConexion (connectionString);
            _repositorio = new ClienteRepositorio (_conexion);
        }
        public GuardarClienteResponse Guardar (Cliente cliente) {
            try {

                _conexion.Open ();
                _repositorio.Guardar (cliente);
                _conexion.Close ();
                return new GuardarClienteResponse (cliente);
            } catch (Exception e) {
                return new GuardarClienteResponse ($"Error de la Aplicacion: {e.Message}");
            } finally { _conexion.Close (); }
        }
        
        public List<Cliente> ConsultarClientes () {
            _conexion.Open ();
            List<Cliente> clientes = _repositorio.ConsultarClientes();
            _conexion.Close ();
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