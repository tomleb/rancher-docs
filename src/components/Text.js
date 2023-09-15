import React from "react";
import PropTypes from "prop-types";
import jp from "jsonpath";

// Use it like so:
//
// input.md:
//   import T from '@site/src/components/Text'
//
//   Hello <T path="foo.bar.baz"/>
// output:
//   Hello toto
const Text = ({ p }) => {
  // Foc POC purposes but the idea would be to fetch the yaml from
  // https://github.com/rancher/dashboard/blob/master/shell/assets/translations/en-us.yaml
  // (with the right language) and convert from yaml to javascript object.
  const obj = {
    foo: {
      bar: {
        baz: "toto",
      },
    },
  }
  // Use a json path query to query the text
  // eg: foo.bar.baz
  const text = jp.query(obj, p)
  return (
`${text}`
  );
};

export default Text;
