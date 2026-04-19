Valor = int(input())
Valor2 = int(input())
Valor3 = int(input())
Valor4 = int(input())
Valor5 = int(input())


negativo = 0
positivo = 0
par = 0
impar = 0

if Valor < 0:
    negativo = negativo + 1

if Valor > 0:
    positivo = positivo + 1

if (Valor%2) == 0:
    par = par + 1
else: impar = impar + 1

if Valor2 < 0:
    negativo = negativo + 1

if Valor2 > 0:
    positivo = positivo + 1

if (Valor2%2) == 0:
    par = par + 1
else: impar = impar + 1

if Valor3 < 0:
    negativo = negativo + 1

if Valor3 > 0:
    positivo = positivo + 1

if (Valor3%2) == 0:
    par = par + 1
else: impar = impar + 1

if Valor4 < 0:
    negativo = negativo + 1

if Valor4 > 0:
    positivo = positivo + 1

if (Valor4%2) == 0:
    par = par + 1
else: impar = impar + 1

if Valor5 < 0:
    negativo = negativo + 1

if Valor5 > 0:
    positivo = positivo + 1

if (Valor5%2) == 0:
    par = par + 1
else: impar = impar + 1



print((par),"valor(es) par(es)")
print((impar), "valor(es) impar(es)")
print((positivo), "valor(es) positivo(s)")
print((negativo), "valor(es) negativo(s)")
