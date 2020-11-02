using System;

namespace Entidad {
    public class Servicio {
        public int IdServicio { get; set; }
        public string Nombre { get; set; }
        public decimal Valor { get; set; }
        public string Descripcion { get; set; }
        public decimal Iva { get; set; }
        public Servicio (string nombre, decimal valor, string descripcion) {
            Nombre = nombre;
            Valor = valor;
            Descripcion = descripcion;
            Iva = 21/100;
        }
        public Servicio()
        {
            
        }
    }
}