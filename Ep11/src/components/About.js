import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Delivering happiness to your doorstep
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center">
                  <h3 className="mt-4 text-xl font-medium text-gray-900">Our Mission</h3>
                  <p className="mt-4 text-gray-500">
                    To be the most loved food ordering platform while delivering the best experiences to our customers, restaurant partners and delivery partners.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center">
                  <h3 className="mt-4 text-xl font-medium text-gray-900">What We Do</h3>
                  <p className="mt-4 text-gray-500">
                    We connect people to food in ways that fit their lifestyles, making delicious meals more accessible to everyone, everywhere.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center">
                  <h3 className="mt-4 text-xl font-medium text-gray-900">Our Values</h3>
                  <p className="mt-4 text-gray-500">
                    Customer obsession, ownership, bias for action, and continuous learning drive everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-12 max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Join Our Team
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                We're always looking for talented people to join our growing team.
              </p>
              <div className="mt-8">
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700">
                  View Open Positions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;    
