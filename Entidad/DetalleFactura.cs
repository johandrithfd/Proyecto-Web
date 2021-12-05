using System;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entidad
{
    public class DetalleFactura
    {
        public DetalleFactura(double valorServicio, int cantidad, double porcentajeIva, double porcentajeDescuento)
        {
            ValorServicio = valorServicio;
            Cantidad = cantidad;
            PorcentajeIva = porcentajeIva;
            PorcentajeDescuento = porcentajeDescuento;
        }

        public DetalleFactura()
        {

        }

        [Key]
        public int IdDetalleFactura {get; set;}
        [Column(TypeName = "decimal(9, 2)")]
        public double ValorServicio {get; set;}
        [Column(TypeName = "Int")]
        public int Cantidad {get; set;}
        [Column(TypeName = "decimal(5, 2)")]
        public double PorcentajeIva {get; set;}
        [Column(TypeName = "decimal(5, 2)")]
        public double PorcentajeDescuento {get; set;}

        [Display(Name = "SubTotal")]
        public double SubTotal 
        {
            get{
                return ValorServicio * Cantidad;
            }
        }
        [Display(Name = "ValorIva")]
        public double ValorIva 
        {
            get{
                return SubTotal * PorcentajeIva;
            }
        }
        [Display(Name = "ValorDescuento")]
        public double ValorDescuento
        {
            get{
                return SubTotal * PorcentajeDescuento/100;
            }
        }
        [Display(Name = "Total")]
        public double Total 
        {
            get{
                return SubTotal + ValorIva - ValorDescuento;
            }
        }
        public int ServicioId { get; set; }
        
    }
}
