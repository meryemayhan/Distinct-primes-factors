İnt max = 1000000;
İnt[] numFactors = new int[max];

    For ( int index = 0; index < max; index++ )
              numFactors[index] = 0;

int maxSqrt = (int) Math.sqrt((double)(max));
         for ( int index = 2; index < maxSqrt; index++)
{
           İf (numFactors[index] != 0)
              Countinue;
               For ( int a = index *2; a < += index)
                          numFctors[a]++;
}
İnt run = 0;
             For (int imdex = 644; index < max; index++)
{
       İf ( numFactors[index] < 4 )
{
        Run = 0;
        Continue;
}
Run++;
       İf ( run == 4 )
           Return index – 3;
}
Return 0;
