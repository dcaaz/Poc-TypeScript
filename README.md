# POC-TypeScript

> Um pequeno projeto para acompanhar, registrar e controlar o dinheiro arrecadado por um grupo de pessoas para determinada finalidade, seja ela fazer uma festa, comprar algum bem, etc.

## Idealização do projeto

O projeto foi pensado para treinar os aprendizados da semana em TypeScript

- usando os types das libs;
- usando os types criados pelo propio desenvolvedor;

## DOC-API

1. Pegar todos os registros de depositos e quem depositou:
    
    Route get: ```"/balance"``` 

    Desrição: nela você consegue pegar a lista de todas as pessoas e os valores que elas depositaram. 
    
    Saida:
    ```bash
    [
        {
            "id": 5,
            "name": "joao",
            "value": 10,
            "day": "2023-01-18T03:00:00.000Z"
        },
        {
            "id": 6,
            "name": "igor",
            "value": 15,
            "day": "2023-01-18T03:00:00.000Z"
        }
    ]
    ```

2. Pegar a soma de todos os depositos feitos: 

    Route get: ```"/total"``` 
    
    Desrição: nessa rota mostra o saldo que aquele grupo conseguiu arrecadar. 

    Saida:
    ```bash
    [
        {
        "value_total": "71"
        }
    ]
    ```

3. Novo gasto:

    Route post: ```"/insert-value"```
    
    Desrição: Criar uma nova entrada mostrando quem depoistou e quanto.

    Entrada: 
    ```bash
    {
        "name": "igor",
        "value": 10
    }
    ```
    Saida: status 201.


4. Editar depósito:

    Route put: ```"/update/:id"```
    
    Desrição: Editar um depósito criado.

    Entrada: 
    ```bash
    {
        "value": 100
    }
    ```
    Saida: status 200. 

5. Deletar gasto:

    Route delete: ```"/delete-value/:id"```
    
    Desrição: Deletar um gasto criado.
    
    Saida: status 204. 