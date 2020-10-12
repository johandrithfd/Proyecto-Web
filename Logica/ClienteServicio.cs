using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using Datos;
using Entidad;
using Datos;


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
<<<<<<< HEAD
            List<Cliente> clientes = _repositorio.ConsultarClientes ();
=======
            List<Cliente> clientes = _repositorio.ConsultarClientes();
>>>>>>> 78056d2862ba16d11dfc6e1f16de05a7632c71d5
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