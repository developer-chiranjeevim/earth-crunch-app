import { Shield, Award, Truck, RotateCcw } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "FSSAI Certified",
      description: "Licensed food safety standards",
      color: "text-green-600",
    },
    {
      icon: Award,
      title: "ISO 22000:2018",
      description: "International quality certification",
      color: "text-blue-600",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders above ₹499",
      color: "text-orange-600",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "7-day return policy",
      color: "text-purple-600",
    },
  ];

  const certifications = [
    "FSSAI License No: 12345678901234",
    "ISO 22000:2018 Certified",
    "HACCP Compliant",
    "Non-GMO Project Verified",
    "Halal Certified",
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2
          className="text-3xl text-amber-900 mb-2"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Quality You Can Trust
        </h2>
        <p className="text-gray-600">
          Certified quality and customer satisfaction guaranteed
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {badges.map((badge, index) => (
          <Card
            key={index}
            className="border-amber-200 hover:shadow-md transition-shadow"
          >
            <CardContent className="p-6 text-center space-y-3">
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 ${badge.color}`}
              >
                <badge.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg text-amber-900 mb-1">
                  {badge.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {badge.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-amber-200 bg-amber-50">
        <CardContent className="p-6">
          <h3
            className="text-lg text-amber-900 mb-4 text-center"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Our Certifications & Licenses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <span className="text-green-600">✓</span>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}