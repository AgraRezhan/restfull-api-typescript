# User API Spec

## Register User
Endpoint: Post/API/User

Request Body:

```json
{
    "Username" : "Agra Rezhan",
    "Password" : "Rahasia",
    "Name" : "Alif Getar Ramadhan"
}
```

Response Body (Success) :

```json
{
 "Data": {
    "Username" : "Agra Rezhan",
    "Name" : "Alif Getar Ramadhan"
   }
}
```

Response Body (Failed) :

```json
{
    "Erorrs" : "Please Regist Again...."
}
```

## Login User
Endpoint: Post/API/User/Login

Request Body:

```json
{
    "Username" : "Agra Rezhan",
    "Password" : "Rahasia"
}
```

Response Body (Success) :

```json
{
 "Data": {
    "Username" : "Agra Rezhan",
    "Name" : "Alif Getar Ramadhan",
    "Token" : "UUID"
   }
}
```

Response Body (Failed) :

```json
{
    "Erorrs" : "Username And Password Wrong, ...."
}
```

## Get User
Endpoint: Get/API/User/Current

Request Header :
X-API-TOKEN : token

Response Body (Success) :

```json
{
 "Data": {
    "Username" : Agra Rezhan,
    "Name" : Alif Getar Ramadhan
   }
}
```

Response Body (Failed) :

```json
{
    "Erorrs" : "Unauthorize, ...."
}
```

## Update User
Endpoint: PATCH/API/User/Current

Request Header :
X-API-TOKEN : token

Request Body:

```json
{
    "Password" : Rahasia, //Tidak Wajib
    "Name" : Alif Getar Ramadhan //Tidak Wajib
}
```

Response Body (Success) :

```json
{
 "Data": {
    "Username" : Agra Rezhan,
    "Name" : Alif Getar Ramadhan
   }
}
```

Response Body (Failed) :

```json
{
    "Erorrs" : "Unauthorize, ...."
}
```

## Logout User
Endpoint: Delete/API/User/Current

Request Header : 
X-API-TOKEN : token

Response Body (Success) :

```json
{
 "Data": "Ok"
}
```

Response Body (Failed) :

```json
{
    "Erorrs" : "Unauthorize...."
}
```