package com.Engine.Engine.Models;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.Date;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "users")
public class User implements Serializable {
    @Id
    private String id;
    private String firstname;
    private String lastname;
    private String password;
    private String email;
    private Date birthDate;
    private String phone;
    private String gender;

}
