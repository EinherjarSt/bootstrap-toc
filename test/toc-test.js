describe('Toc.helpers', function() {
  describe('#generateUniqueIdBase()', function() {
    it("uses the text from the element", function() {
      var el = document.createElement('h1');
      el.innerHTML = "Some  tExt- with aidan's /. stuff   "
      var base = Toc.helpers.generateUniqueIdBase(el);
      expect(base).to.eql('some-text-with-aidan-s-stuff');
    });

    it("uses the tag name of the element if there's no text", function() {
      var el = document.createElement('h1');
      var base = Toc.helpers.generateUniqueIdBase(el);
      expect(base).to.eql('h1');
    });
  });
});
