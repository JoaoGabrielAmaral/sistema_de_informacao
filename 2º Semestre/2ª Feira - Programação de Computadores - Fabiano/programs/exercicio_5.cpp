#include <stdio.h>
#include <stdlib.h>

//Exercícios Recomendados Nº 5 - Cálculo Porcentagem
main() 
{
	float preco;
	
	printf("Informe a preco: ");
	scanf("%f", &preco);
	
	printf("\nPreco com 10%% de desconto = %.2f", preco * 0.9);
	
	printf("\n\n\n");
	system("pause");
}

