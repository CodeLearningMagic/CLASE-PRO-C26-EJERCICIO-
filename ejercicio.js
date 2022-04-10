1. Escribe la funcion show CollisionWitHBoat 


a) function collisionWithBoat(index) {
  
}


b) function collisionWithBoat() {
  
}

c) collisionWithBoat(index) {
  
}


2. Dentro de la función collisionWithBoat(), usaremos un bucle for en la longitud del barco.

a)for (var i = 1; i < boats.length; i=i+2) {
    
  }

b)  (var i = 0; i > boats.length; i++) {
    
  }


c) for (var i = 0; i < boats.length; i++) {
    
  }
  
  
  3. Primero debemos verificar si el índice de la bala de cañón y la i de los barcos están definidos y no indefinidos, lo que significa que hay algún valor dentro de esas matrices.
Escribiremos la condición if para hacerlo. Esta condición estará dentro del bucle interno.

a) if (balls[index] = undefined && boats[i] = undefined) {
     
    }
 

b) if (balls[] !== undefined && boats[] !== undefined) {
     
    }


c) if (balls[index] !== undefined && boats[i] !== undefined) {
     
    }


4. Tenemos ambos valores. Ahora tenemos que comprobar si hubo una colisión entre el barco y la bala de cañón.


a) var collision = Matter.SAT.collides(balls[index].body, boats[i].body);

b) var collision = collides(balls[index].body, boats[i].body);

c) var collision = collides(balls[index], boats[].body);


5. Cuando la bala de cañon choque con el barco, debemos eliminar la bala y el barco de la matriz y de world – mundo, para hacerlos desaparecer del canvas.
Ahora, dentro del archivo Boat.js, escribiremos una función remove – quitar, que eliminará el barco de world y de la matriz. Esta función tomará como parámetro el índice del barco a eliminar.

a) remove() {
    setTimeout(() => {
      Matter.World.remove(world, boats[].body);
      delete boats[];
    }, 2000);
  }



b) remove(index) {
    setTimeout(() => {
      Matter.World.remove(world, boats[index].body);
      delete boats[index];
    }, 2000);
  }


c) remove(index) {
    setTimeout(() => {
      Matter.World.quitar(world, boats[index].body);
      borrar boats[index];
    }, 2000);
  }



6. Escribiremos la función remove() similar dentro de la clase cannonball, ya que también necesitamos eliminar la bala de cañón de la pantalla.

a) remove(index) {
    Matter.Body.setVelocity(this.body, { x: 0, y: 0 });

    setTimeout(() => {
      Matter.World.remove(world, this.body);
      delete balls[index];
    }, 1000);
  }
  
  b) remove(index) {
    setTimeout(() => {
      Matter.World.remove(world, this.body);
      delete balls[i];
    }, 1000);
  }
  
  c) remove(index) {
    Matter.Body.setVelocity(this.body, { x: 0, y: 0 });

    
      Matter.World.remove(world, this.body);
      delete balls[index];
  }



7. Usaremos otra condición if – condición si dentro de nuestra funcion de collisionwithboats, para verificar si collision.collided es true.
Si es true entonces,
Dentro de esta condición, llamaremos a la función boats[i].remove [i] y llamaremos a Matter.World.remove() y eliminaremos balls[index] para eliminar las balas de world y de la matriz.

       a) if (collision.collided) {

        Matter.World.remove(world, balls[i].body);
        delete balls[i];
      }


    
     b)) if (collided) {
        boats[].remove();

        Matter.World.remove(world, balls[index].body);
        delete balls[];
      }
    
    
    c) if (collision.collided) {
        boats[i].remove(i);

        Matter.World.remove(world, balls[index].body);
        delete balls[index];
      }
    
    
    
   8.  llamaremos a la función collisionWithBoat() junto con showCannonBalls() y pasaremos 'i' para el índice. dentro de la funcion draw 
   
   for (var i = 0; i < balls.length; i++) {
    showCannonBalls(balls[i], i);
    collisionWithBoat(i);
  }
   
   
   9. Dentro de la función showCannonBalls(), escribiremos una condición para verificar si la posición X de la bala de cañón es mayor o igual al ancho de la pantalla o si la posición y es mayor que la altura-50, lo que significa un poco por encima de la suelo.
Si alguna de las dos condiciones es verdadera, eliminaremos la bala usando la función remove, que escribimos anteriormente.

if (ball.body.position.x >= width || ball.body.position.y >= height - 50) {
      ball.remove(index);
    }


