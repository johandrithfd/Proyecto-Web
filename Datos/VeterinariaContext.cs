using System;
using Microsoft.EntityFrameworkCore;
using Entidad;

namespace Datos
{
    public class VeterinariaContext : DbContext
    {
        public VeterinariaContext(DbContextOptions options) : base (options){
        
        }
        public DbSet <Cliente> Clientes {get;set;}
        public DbSet <Factura> Facturas {get;set;}
        public DbSet <Servicio> Servicios {get;set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
            {
                modelBuilder.Entity<Factura>()
                    .HasOne<Cliente>()
                    .WithMany()
                    .HasForeignKey(f => f.Identificacion);
                modelBuilder.Entity<DetalleFactura>()
                    .HasOne<Servicio>()
                    .WithMany()
                    .HasForeignKey(d => d.ServicioId);
            }
        }
}
