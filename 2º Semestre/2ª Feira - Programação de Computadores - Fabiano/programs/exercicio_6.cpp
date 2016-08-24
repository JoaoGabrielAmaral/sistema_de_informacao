#include <stdio.h>
#include <stdlib.h>

//Exercícios Recomendados Nº 6 - Cálculo Comissão
main() 
{
	float salario, vendas, comissao;
	
	printf("Informe o salario: ");
	scanf("%f", &salario);
	
	printf("\nInforme o valor das vendas: ");
	scanf("%f", &vendas);
	
	comissao = vendas * 0.04;
	printf("\n\nValor da comissao: %.2f", comissao);
	printf("\nSalario final: %.2f", salario + comissao);
	
	printf("\n\n\n");
	system("pause");
}

