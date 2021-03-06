/**
  This view is used for rendering a list of replies below a post

  @class RepliesView
  @extends Ember.CollectionView
  @namespace Discourse
  @module Discourse
**/
Discourse.RepliesView = Ember.CollectionView.extend({
  templateName: 'replies',
  tagName: 'section',
  classNames: ['replies-list', 'embedded-posts', 'bottom'],
  itemViewClass: Discourse.EmbeddedPostView,

  repliesShown: (function() {
    var $this;
    $this = this.$();
    if (this.get('parentView.repliesShown')) {
      Em.run.next(function() {
        $this.slideDown();
      });
    } else {
      Em.run.next(function() {
        $this.slideUp();
      });
    }
  }).observes('parentView.repliesShown')

});


