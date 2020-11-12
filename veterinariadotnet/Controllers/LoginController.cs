
using System;
using Datos;
using Entidad;
using Logica;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using veterinariadotnet.Models;
using veterinariadotnet.Config;
using veterinariadotnet.Services;

namespace veterinariadotnet.Controllers
{    
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]

    public class LoginController:ControllerBase
    {
        VeterinariaContext _context;
        UserService _userService;
        JwtService _jwtService;

        public LoginController(VeterinariaContext context, IOptions<AppSetting> appSettings)
        {
            _context = context;
            var admin = _context.Users.Find("Lrochety");
            if (admin == null) 
            {
                _context.Users.Add(new User() 
                { 
                    UserName="Lrochety", 
                    Password="4444", 
                    Email="Lrochety@gmail.com", 
                    Estado="AC", 
                    FirstName="Rocha jr", 
                    LastName="", 
                    Role="admin",
                    MobilePhone="3014341494"}
                );
                var registrosGuardados=_context.SaveChanges();
            }
            _userService = new UserService(context);
            _jwtService = new JwtService(appSettings);
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login(LoginInputModel model)
        {
            var user = _userService.Validate(model.Username, model.Password);
            if (user == null) return BadRequest("Username or password is incorrect");
            var response= _jwtService.GenerateToken(user);
            return Ok(response);
        }




    }
}
