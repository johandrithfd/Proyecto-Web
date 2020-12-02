using System.Linq;
using System;
using System.Collections.Generic;
using Entidad;

namespace veterinariadotnet.Models
{
    public class FacturaInputModel
    {
        public virtual List<DetalleFactura> DetallesFactura { get; set; }
        public  string Identificacion { get; set; }
    }
    public class FacturaViewModel : FacturaInputModel
    {
        public FacturaViewModel()
        {
            
        }
        public int FacturaId { get; set; }
        public double SubTotal { get; set; }
        public double ValorIva { get; set; }
        public double ValorDescuento { get; set; }
        public double Total { get; set; }
        public int CantidadServicios { get; set; }
        public DateTime Fecha { get; set; }

        public FacturaViewModel(Factura factura)
        {
            CantidadServicios = factura.CantidadServicios;
            Fecha = factura.Fecha;
            DetallesFactura =factura.DetallesFactura;
            Identificacion = factura.Identificacion;
            FacturaId = factura.FacturaId;
            SubTotal = factura.SubTotal;
            ValorIva = factura.ValorIva;
            ValorDescuento = factura.ValorDescuento;
            Total = factura.Total;
        }
        
    }
}

