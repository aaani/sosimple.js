# sosimple.js
## A Tiny Superfast Javascript templating engine

**Tiny** because its size is 316 bytes (compressed) and 233 bytes (Compressed and zipped).

**Superfast** because it's faster than jresig templating engine. [Performace tests](#perf)

**Simple** because it extremely easy to use, and underlying code is very simple to understand.

### Usage:
```JavaScript
var renderedHTMLString = renderSoSimple(templateString, modelJSON);
```


### Examples:

#### Inline blocks
**HTML**
```HTML+ERB
<body>
    <script type="text/html" id="inline_var_template">
        <p>Hi <%=name%>, how are you? Are you from <%=city%></p>
    </script>
    <div id="result"> </div>
</body>
```
**Javascript**
```JavaScript
var template = document.getElementById("inline_var_template").innerHTML;
var rendered = renderSoSimple(template, {name: "Amit", city: "Chicago"});
document.getElementById("result").innerHTML = rendered;
```


#### If else if ladder
**HTML**
```HTML+ERB
<body>
    <script type="text/html" id="what_to_wear_template">
        <div>
            <% if(weather == "hot"){ %>
            <p>Wear <%=hotwear%></p>
            <% } else if(weather == "cold") { %>
            <p>Wear <%=coldwear%></p>
            <% } else { %>
            <p>Wear whatever you want</p>
            <% } %>
        </div>
    </script>
    <div id="what_to_wear"> </div>
</body>
```
**Javascript**
```JavaScript
var template = document.getElementById("what_to_wear_template").innerHTML;
var rendered = renderSoSimple(template, {weather: "humid", hotwear: "light", coldwear: "dark"});
document.getElementById("what_to_wear").innerHTML = rendered;
```


#### For loop
**HTML**
```HTML+ERB
<body>
<script type="text/html" id="jokes_template">
    <% for(var i=0; i<value.length; i++) { %>
    <p>Joke <%=(i+1)%>: <%= value[i].joke %></p>
    <p>Tags: <% for(var j=0; j<value[i].categories.length; j++) { %> <i><%=value[i].categories[j] %></i> <% } %></p>
    <% } %>
</script>
<div id="jokes"> </div>
</body>
```
**Javascript**
```JavaScript
var template = document.getElementById("jokes_template").innerHTML;
var jokes = {
    "value": [{
        "id": 473,
        "joke": "Chuck Norris can overflow your stack just by looking at it.",
        "categories": ["nerdy", "code", "stack"]
    }, {
        "id": 497,
        "joke": "If Chuck Norris writes code with bugs, the bugs fix themselves.",
        "categories": ["bugs", "nerdy", "code"]
    }, {
        "id": 547,
        "joke": "Product Owners never ask Chuck Norris for more features. They ask for mercy.",
        "categories": ["product", "nerdy"]
    }]
};
var rendered = renderSoSimple(template, jokes);
document.getElementById("jokes").innerHTML = rendered;
```


#### Switch
**HTML**
```HTML+ERB
<body>
<script type="text/html" id="arithmetic_template">
    <% switch(operation) { case '+': %>
            <p>x+y=<%= (x+y) %></p>
            <%break;%>
        <% case '-': %>
            <p>x-y=<%= (x-y) %></p>
            <%break;%>
        <%default:%>
            <p>Unrecognised Operator</p>
    <%}%>
</script>
<div id="arithmetic_expression"> </div>
</body>
```
**Javascript**
```JavaScript
var template = document.getElementById("arithmetic_template").innerHTML;
var values = {
    "x": 10,
    "y": 15
};
values.operation = "+";
var rendered = renderSoSimple(template, values);
document.getElementById("arithmetic_expression").innerHTML = rendered;
```
**Note**: In the Switch statement example, first case is inline with the control expression. Watch out for that because it's is a bit counter intuitive.

### Performance <a name="perf"></a>
#### Comparison with jresig templating engine
- [If Else](http://jsperf.com/ifelse-sosimple)

- [For Loop](http://jsperf.com/forloop-sosimple)

