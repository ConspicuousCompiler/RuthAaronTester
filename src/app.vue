<template>

  <fieldset>

    <legend>{{title}}</legend>

    <div class="inputAndResult">
      <textarea id="inputData"
        name="inputData"
        placeholder="Enter pairs to test as (x,y) one per line"
        rows="5"
        v-model="inputData"
        />
      <textarea id="results"
        rows="5"
        placeholder="Results will appear here"
        v-model="results"
        disabled
        />
    </div>

    <button
      v-on:click="testPairs">Test Pairs</button>

  </fieldset>

</template>

<script>
import primes from './primes'

var sum = function(f) {
  return f.reduce((a, b) => a + b, 0);
};

var isRuthAaronPair = function(a, b) {
  return sum(primes.getDistinctPrimeFactors(a)) ===
         sum(primes.getDistinctPrimeFactors(b));
};


export default {

  data() {
    return {
      inputData: undefined,
      results: undefined,
    };
  },

  props: [ 'title' ],

  methods: {

    testPairs() {

      var inputData = this.inputData || "";

      this.results = "";
      var lines = inputData.split('\n') || [];

      lines.forEach( (line) => {
        var a, b, match;

        match = line.match(/\(\s*(\d+)\s*,\s*(\d+)\s*\)/);
        if (!match) return;
        [a, b] = [ match[1], match[2] ];
        var testResult = isRuthAaronPair(a, b) ? "VALID" : "NOT VALID";
        this.results += `(${a}, ${b}) ${testResult}\n`;
      });

      if (this.results === "") {
        this.results = "No pairs detected.  Input one set of coordinates per line in the format (x,y)";
      }


    },

  },

}

</script>

<style>
body {
  background: #DDD;
}

fieldset {
  display: inline-block;
}

.inputAndResult {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

textarea, button {
  margin: 10px;
}

textarea {
  width: 350px;
}
</style>

