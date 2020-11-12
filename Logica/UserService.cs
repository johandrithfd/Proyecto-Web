using System;
using Datos;
using System.Collections.Generic;
using System.Linq;
using System.Security.Permissions;
using Entidad;



namespace Logica
{
    public class UserService
    {
        private readonly VeterinariaContext _context;
        public UserService(VeterinariaContext context)=> _context = context;
        
        public User Validate(string userName, string password) 
        {
            return _context.Users.FirstOrDefault(t => t.UserName == userName && t.Password == password && t.Estado == "AC");
        }
    }
}
