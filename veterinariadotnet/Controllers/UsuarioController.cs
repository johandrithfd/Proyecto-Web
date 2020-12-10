using System;
using Datos;
using Entidad;
using Logica;
using Microsoft.AspNetCore.Mvc;
using veterinariadotnet.Models;

namespace veterinariadotnet.Controllers
{

    [Route("api/usuario")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
       private readonly UserService _userService;

       public UsuarioController(VeterinariaContext context){
        _userService=new UserService(context);}

        [HttpPost]
        public ActionResult<LoginViewModel> Post(LoginViewModel userInput)
        {
            User user = MapearUser(userInput);

            var response = _userService.Guardar(user);
            

            
            if (response.Error)
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.User);
        }

        private User MapearUser(LoginViewModel userInput)
        {
            var user = new User
            {
                UserName = userInput.Username,
                Password= userInput.Password,
                Email = userInput.Email,
                identificacion = userInput.Identificacion,
                FirstName= userInput.FirstName,
                LastName= userInput.LastName,
                Role=userInput.Role,
                MobilePhone = userInput.MobilePhone,
            };
            
            return user;
        }
        [HttpGet("{totalizar}/{usarios}")]
        public ActionResult<int> TotalizarClientes(string totalizar, string usuarios)
        {
            var totalusuarios = _userService.Totalizar();
            return totalusuarios;
        }




    }
}
