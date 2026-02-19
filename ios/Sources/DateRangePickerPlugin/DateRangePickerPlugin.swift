import Foundation
import Capacitor

// Sab kuch comment kar dein taaki Native registration khatam ho jaye
/*
@objc(DateRangePickerPlugin)
public class DateRangePickerPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "DateRangePickerPlugin"
    public let jsName = "DateRangePicker"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = DateRangePicker()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
}
*/