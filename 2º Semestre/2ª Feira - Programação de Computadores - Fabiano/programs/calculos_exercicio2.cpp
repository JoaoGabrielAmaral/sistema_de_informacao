#include <stdio.h>
#include <stdlib.h>

//Exercício 2 - Cálculo ponderado
main() 
{
	float n1, p1, n2, p2, resultado;
	
	printf("Informe a nota 1: ");
	scanf("%f", &n1);
	
	printf("\nInforme o peso da nota 1: ", &p1);
	scanf("%f", &p1);
	
	printf("\n\nInforme a nota 2: ");
	scanf("%f", &n2);
	
	printf("\nInforme o peso da nota 1: ", &p2);
	scanf("%f", &p2);
	
	resultado = ((n1 * p1) + (n2 * p2)) / (p1 + p2);
	printf("\n\nresultado = %.2f", resultado);
	
	printf("\n\n\n");
	system("pause");
}

