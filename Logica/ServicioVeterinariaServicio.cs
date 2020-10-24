using System.Collections.Generic;
using System;
using Entidad;
using Datos;
namespace Logica
{    
    public class ServicioVeterinariaServicio
    {
        private readonly AdministradorDeConexion administradorDeConexion;
        private readonly ServicioRepositorio _repositorio;
        public ServicioVeterinariaServicio(string cadenaConexion)
        {
            administradorDeConexion = new AdministradorDeConexion(cadenaConexion);
            _repositorio = new ServicioRepositorio(administradorDeConexion);
        }
        public GuardarServicioRespuesta Guardar (Servicio servicio) {
            try {

                administradorDeConexion.Open ();
                _repositorio.Guardar (servicio);
                administradorDeConexion.Close ();
                return new GuardarServicioRespuesta (servicio);
            } catch (Exception e) {
                return new GuardarServicioRespuesta ($"Error de la Aplicacion: {e.Message}");
            } finally { administradorDeConexion.Close (); }
        }
        public ConsultarServicioRespuesta ConsultarServicios ()
        {
            try
            {
                administradorDeConexion.Open();
                List<Servicio> servicios = _repositorio.ConsultarServicios();
                administradorDeConexion.Close();
                return new ConsultarServicioRespuesta(servicios);
            }
            catch( Exception e)
            {
                return new ConsultarServicioRespuesta("error al consultar los servicios : " + e.Message);
            }
            finally {administradorDeConexion.Close();}
        }
    }
    public class GuardarServicioRespuesta {
        public GuardarServicioRespuesta (Servicio servicio) {
                Error = false;
                Servicio  = servicio;
            }
            public GuardarServicioRespuesta (string mensaje) {
                Error = true;
                Mensaje = mensaje;
            }
            public bool Error { get; set; }
            public string Mensaje { get; set; }
            public Servicio Servicio { get; set; }    
    }
    public class ConsultarServicioRespuesta {
        public ConsultarServicioRespuesta (List<Servicio> servicios) {
                Error = false;
                Servicios  = servicios;
            }
            public ConsultarServicioRespuesta (string mensaje) {
                Error = true;
                Mensaje = mensaje;
            }
            public bool Error { get; set; }
            public string Mensaje { get; set; }
            public List<Servicio> Servicios { get; set; }    
    }
}
