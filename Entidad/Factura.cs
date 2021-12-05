using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace Entidad
{
    public class Factura
    {
        public Factura(List<DetalleFactura> detallesFactura)
        {
            DetallesFactura = detallesFactura;
        }

        public Factura()
        {

        }

        [Key]
        public int FacturaId { get; set; }
        public DateTime Fecha { get; set; }
        [Display(Name = "CantidadServicios")]
        public int CantidadServicios 
        {
            get{
                return DetallesFactura.Count();
            }
        }
        
        [Display(Name = "SubTotal")]
        public double SubTotal 
        {
            get{
                return DetallesFactura.Sum(s => s.SubTotal);
            }
        }
        [Display(Name = "ValorIva")]
        public double ValorIva 
        {
            get{
                return  DetallesFactura.Sum(s => s.ValorIva); 
            }
        }
        [Display(Name = "ValorDescuento")]
        public double ValorDescuento
        {
            get{
                return DetallesFactura.Sum(s => s.ValorDescuento); 
            }
        }
        [Display(Name = "Total")]
        public double Total 
        {
            get{
                return SubTotal  + ValorIva - ValorDescuento;
            }
        }
        [Required]
        public  string Identificacion { get; set; }
        public virtual List<DetalleFactura> DetallesFactura { get; set; }
    }
}
