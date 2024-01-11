contactos = []
i = 0
numero = int(input("¿Cuantos contactos quieres agregar? " ))
def agregar_contacto():
    nombre = input("Ingrese el nombre del contacto: ")
    numero = int(input("Ingrese el número de teléfono del contacto: "))
    contactos.append([nombre,numero])




for _ in range(numero):
    agregar_contacto()



print("Lista de contactos:")


for contacto in contactos:
    i = i+1
    print(f" Contacto {i} : Nombre: {contacto[0]}, Teléfono: {contacto[1]}")