using System;
using Entidad;

namespace veterinariadotnet.Models
{
    public class ServicioInputModel
    {
        public string Nombre { get; set; }
        public decimal Valor { get; set; }
        public string Descripcion { get; set; }
        public decimal Iva {
            get {
                return 21 / 100;
            }
        }
    }
    public class ServicioViewModel : ServicioInputModel
    {
        public ServicioViewModel()
        {
            
        }
        
        public ServicioViewModel(Servicio servicio)
        {
            Nombre = servicio.Nombre;
            Valor = servicio.Valor;
            Descripcion = servicio.Descripcion;
            IdServicio = servicio.IdServicio;
        }
        public int IdServicio { get; set; }
    }
}