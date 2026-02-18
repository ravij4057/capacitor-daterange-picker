// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "Ravij4057CapacitorDaterangePicker",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "Ravij4057CapacitorDaterangePicker",
            targets: ["DateRangePickerPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "DateRangePickerPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/DateRangePickerPlugin"),
        .testTarget(
            name: "DateRangePickerPluginTests",
            dependencies: ["DateRangePickerPlugin"],
            path: "ios/Tests/DateRangePickerPluginTests")
    ]
)