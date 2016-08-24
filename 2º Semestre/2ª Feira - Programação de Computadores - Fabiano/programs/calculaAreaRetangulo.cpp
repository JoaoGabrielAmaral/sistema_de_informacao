#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

main()
{
	setlocale(LC_ALL, "portuguese");
	
	float comp, larg;
	
	printf("Informe o comprimento(m): ");
	scanf("%f", &comp);
	
	printf("\nInforme a largura(m): ");
	scanf("%f", &larg);
	
	printf("\n\n¡rea = %.2fm≤", comp * larg);
	
	printf("\n\n\n");
	system("pause");
}

