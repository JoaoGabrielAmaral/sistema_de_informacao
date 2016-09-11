#include <stdio.h>
#include <stdlib.h>

// Estrutura Condicional - Primeiro exemplo
main() 
{
	float n1, n2, ma;
	
	printf("Nota 1: ");
	scanf("%f", &n1);
	
	printf("\nNota 2: ");
	scanf("%f", &n2);
	
	ma = (n1 + n2) / 2;
	
	printf("\n\nMedia final = %.1f", ma);
	
	if (ma >= 6) {
		printf("\n\nAprovado");
		if (ma == 10) 
			printf("\n\Parabéns! Nota Máxima!");
	} else
		printf("\n\nReprovado");
	
	printf("\n\n\n");
	system("pause");
}
