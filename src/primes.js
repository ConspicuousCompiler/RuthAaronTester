var primes = 
  (function() {
    var primes = [2, 3, 5, 7];
    var maxPrime = 7;

    return  {
      primes: primes,

      isPrime: function(_n) {
      
        var n = parseInt(_n);

        if (n > maxPrime) {
          this.generatePrimesTo(2*n + 1);
        }

        if (n === 1 || primes.indexOf(n) != -1) {
          return true;
        } else {
          return false;
        }

      },

      generatePrimesTo: function(_n) {

        var n = parseInt(_n);
        console.info(`Generating primes up to ${n}.`);

        if (n <= maxPrime) {
          return;
        }

        if (n <= 1) {
          return;
        }

        for (var testP = maxPrime + 2; testP <= n; testP +=2) {

          var maxFactor = Math.floor(Math.sqrt(testP));
          var factorFound = false;

          for (var i = 0; i < primes.length; i++) {

            var p = primes[i];

            if (testP % p == 0) {
              factorFound = true;
              break;
            }

            if (p > maxFactor) {
              break;
            }

          }

          if (!factorFound) {
            primes.push(testP);
            maxPrime = testP;
          }

        }

      },

      getDistinctPrimeFactors: function(_n) {

        var n = parseInt(_n);
        var factors = [];

        console.info(`Generating distinct prime factors for ${n}.`);

        if (n <= 1) {
          return [1];
        }

        if (n > maxPrime) {
          this.generatePrimesTo(2*n + 1);
        }

        for (var i = 0; n != 1 && i < primes.length; i++) {

          var p = primes[i];

          if (n % p == 0) {

            while (n % p == 0) {
              n /= p;
            }

            factors.push(p);

          }

        }


        return factors;

      },

      getPrimeFactors: function(_n) {

        var n = parseInt(_n);
        var factors = [];

        console.info(`Generating prime factors for ${n}.`);

        if (n <= 1) {
          return [1];
        }

        if (n > maxPrime) {
          this.generatePrimesTo(2*n + 1);
        }

        for (var i = 0; n != 1 && i < primes.length; i++) {

          var p = primes[i];

          if (n % p == 0) {

            while (n % p == 0) {

              factors.push(p);
              n /= p;

            }

          }

        }


        return factors;

      },

    }
  })();

export default primes;

