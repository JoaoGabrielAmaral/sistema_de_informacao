#include <stdio.h>
#include <stdlib.h>

//Exercício 1
main() 
{
	float pi = 3.14, raio, comp, area, vol;
	
	printf("Informe o raio: ");
	scanf("%f", &raio);
	
	comp = 2 * pi * raio;
	printf("\ncomp = %.2f", comp);
	
	area = pi * (raio * raio);
	printf("\narea = %.2f", area);
	
	vol = 4 * pi * (raio * raio * raio) / 3;
	printf("\nvolume = %.2f", vol);
	
	printf("\n\n\n");
	system("pause");
}

