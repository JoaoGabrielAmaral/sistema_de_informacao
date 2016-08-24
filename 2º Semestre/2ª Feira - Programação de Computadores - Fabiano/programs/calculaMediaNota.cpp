#include <stdio.h>
#include <stdlib.h>

//Calcular e mostrar a média aritmética entre duas notas.
main() 
{
	float nota1, nota2, media;
	
	printf("Informe a primeira nota: ");
	scanf("%f", &nota1);
	
	printf("\nInforme a segunda nota: ");
	scanf("%f", &nota2);
	
	media = (nota1 + nota2) / 2;
	printf("\n\nMedia = %.2f", media);
	
	printf("\n\n\n");
	system("pause");
}

