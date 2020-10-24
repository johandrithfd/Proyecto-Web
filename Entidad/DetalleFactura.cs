using System;
using System.Linq;
namespace Entidad
{
    public class DetalleFactura
    {
        public int IdDetalleFactura {get; set;}
        public decimal ValorServicio {get; set;}
        public int Cantidad {get; set;}
        public decimal PorcentajeIva {get; set;}
        public decimal PorcentajeDescueto {get; set;}
        public Servicio Servicio {get; set;}

        public DetalleFactura(Servicio servicio)
        {
            Servicio = servicio;
            ValorServicio = servicio.Valor;
            PorcentajeIva = servicio.Iva;
            PorcentajeDescueto = 0;
        }
        public decimal SubTotal 
        {
            get{
                return ValorServicio * Cantidad;
            }
        }
        public decimal ValorIva 
        {
            get{
                return SubTotal * PorcentajeIva;
            }
        }
        public decimal ValorDescuento
        {
            get{
                return SubTotal * PorcentajeDescueto;
            }
        }
        public decimal Total 
        {
            get{
                return SubTotal + ValorIva - ValorDescuento;
            }
        }

        
    }
}
