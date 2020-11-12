using System.Collections.Generic;
using System;
using Entidad;
using Datos;
using System.Linq;

namespace Logica
{    
    public class ServicioVeterinariaServicio
    {
        private readonly VeterinariaContext _repositorio;
        public ServicioVeterinariaServicio(VeterinariaContext context)
        {
            _repositorio = context;
        }
        public GuardarServicioRespuesta Guardar (Servicio servicio) {
            try {
                _repositorio.Servicios.Add(servicio);
                _repositorio.SaveChanges();
                return new GuardarServicioRespuesta (servicio);
            } catch (Exception e) {
                return new GuardarServicioRespuesta ($"Error de la Aplicacion: {e.Message}");
            } 
        }
        public ConsultarServicioRespuesta ConsultarServicios ()
        {
            try
            {
                List<Servicio> servicios  = _repositorio.Servicios.ToList();
                return new ConsultarServicioRespuesta(servicios);
            }
            catch( Exception e)
            {
                return new ConsultarServicioRespuesta("error al consultar los servicios : " + e.Message);
            }
            
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
