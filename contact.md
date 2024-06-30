# Contact API Spec

## Create Contact


End Point : POST/API/Contacts

Request Header:
X-API-TOKEN : token

Request Body :
```json
{
    "first_name" : "Alif Getar",
    "last_name" : "Ramadhan",
    "email" : "alif@example.com",
    "phone" : "0892222333344444"
}
```

Response Body (Success)
```json
{
    "data" {
        "id" : "1",
        "first_name" : "Alif Getar",
        "last_name" : "Ramadhan",
        "email" : "alif@example.com",
        "phone" : "089222233334444"
    }
}
```

Response Body (Failed)
```json
{
    "Erorrs" : "last_name must not blank, ...."
}
```
## Get Contact

End Point : GET/API/Contacts/:id

Request Header:
X-API-TOKEN : token

Response Body (Success)
```json
{
    "data" {
        "id" : "1",
        "first_name" : "Alif Getar",
        "last_name" : "Ramadhan",
        "email" : "alif@example.com",
        "phone" : "089222233334444"
    }
}
```

Response Body (Failed)
```json
{
    "Erorrs" : "Contact is not found ...."
}
```

## Update Contact


End Point : PUT/API/Contacts/:id

Request Header:
X-API-TOKEN : token

Request Body :
```json
{
    "first_name" : "Alif Getar",
    "last_name" : "Ramadhan",
    "email" : "alif@example.com",
    "phone" : "0892222333344444"
}
```

Response Body (Success)
```json
{
    "data" {
        "id" : "1",
        "first_name" : "Alif Getar",
        "last_name" : "Ramadhan",
        "email" : "alif@example.com",
        "phone" : "089222233334444"
    }
}
```

Response Body (Failed)
```json
{
    "Erorrs" : "last_name must not blank, ...."
}
```

## Remove Contact

End Point : DELETE/API/Contacts

Request Header:
X-API-TOKEN : token

Response Body (Success)
```json
{
    "data" : "OK"
}
```

Response Body (Failed)
```json
{
    "Erorrs" : "Contact is not found, ...."
}
```

## Search Contact

End Point : GET/API/Contacts

Query Params:
- name : String, Contact first_name or Contact last_name, optional
- phone : String, Contact Phone, Optional 
- email : String, Contact Email, Optional
- pages : number, default 1
- size : number, default 10

Request Header:
X-API-TOKEN : token

Response Body (Success)
```json
{
    "data"[
       {
        "id" : "1",
        "first_name" : "Alif Getar",
        "last_name" : "Ramadhan",
        "email" : "alif@example.com",
        "phone" : "089222233334444"
       },
       {
        "id" : "2",
        "first_name" : "Alif Getar",
        "last_name" : "Ramadhan",
        "email" : "alif@example.com",
        "phone" : "089222233334444"
       }
    ], 
    "paging" : {
        "current_page" : 1,
        "total_page" : 10,
        "size" : 10
    } 
}
```

Response Body (Failed)
```json
{
    "Erorrs" : "Unauthorize, ...."
}
```