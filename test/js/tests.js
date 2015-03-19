
QUnit.test( "Test event subscription/unsubscription", function( assert ) {
    var subscribed = true;
    function callback() {
        assert.ok(subscribed, "Receive only if subscribed");
    }

    // Assert should only be called once
    assert.expect(2);

    // Subscribe to the event
    niclabs.insight.event.on('some-event', callback);
    niclabs.insight.event.trigger('some-event');

    // Unsuscribe from the event
    subscribed = false;
    niclabs.insight.event.off('some-event', callback);
    niclabs.insight.event.trigger('some-event');

    // Subscribe to the event and record the id
    subscribed = true;
    var id = niclabs.insight.event.on('some-event', callback);
    niclabs.insight.event.trigger('some-event');

    // Unsuscribe from the event
    subscribed = false;
    niclabs.insight.event.off('some-event', id);
    niclabs.insight.event.trigger('some-event');
});
