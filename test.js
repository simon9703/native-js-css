let a = {
  name: 123,
  cc: function() {
    console.log(123, this.name)
  }
}

a.cc()
