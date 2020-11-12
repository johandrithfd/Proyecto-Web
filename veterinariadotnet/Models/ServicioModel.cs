using System;
using Entidad;

namespace veterinariadotnet.Models
{
    public class ServicioInputModel
    {
        public string Nombre { get; set; }
        public decimal Valor { get; set; }
        public string Descripcion { get; set; }

        
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
            ServicioId = servicio.ServicioId;
            Iva = servicio.Iva;
        }
        public int ServicioId { get; set; }
        public double Iva { get; set; }
        
    }
}
