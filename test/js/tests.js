
QUnit.test( "Test event subscription/unsubscription", function( assert ) {
    var subscribed = true;
    function callback() {
        assert.ok(subscribed, "Receive only if subscribed");
    }

    // Assert should only be called once
    assert.expect(1);

    // Subscribe to the event
    niclabs.insight.event.listen('some-event', callback, subscribed);
    niclabs.insight.event.trigger('some-event');

    // Unsuscribe from the event
    subscribed = false;
    niclabs.insight.event.listen('some-event', callback, subscribed);
    niclabs.insight.event.trigger('some-event');
});
