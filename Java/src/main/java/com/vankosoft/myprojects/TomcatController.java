package com.vankosoft.myprojects;

import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.*;

//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class TomcatController
{	
// 	@GetMapping( "/" )
//     public Collection<String> sayHelloTomcat()
//     {
//         return IntStream.range( 0, 10 )
//           .mapToObj( i -> "Hello Tomcat number " + i )
//           .collect( Collectors.toList() );
//     }
    
    @GetMapping( "/hello" )
    public String sayHello()
    {
        return "Hello world!";
    }
}
