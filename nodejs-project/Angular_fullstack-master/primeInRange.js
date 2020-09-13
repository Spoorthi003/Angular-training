function primeInRange(lower,higher)
{
    //console.log("args",arguments);
    for(j=lower;j<higher;j++)
    {
        for(i=2;i<j/2;i++)
        {
            if(j%i == 0)
            {
                break;
            }
            else
            {
                console.log(j);
                break;
            }
        }
    }
}

primeInRange(1,17);