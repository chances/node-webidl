// GENERATED CODE: DO NOT EDIT
//////////////////////////////

#include <nan.h>
#include "add.h"

NAN_METHOD(add);
NAN_METHOD(add) {
  if (info.Length() < 2) {
    info.GetIsolate()->ThrowException(Nan::New("Function add called with unspecified arguments").ToLocalChecked());
    return;
  }
  // Ensure x is a Number
  if (info[0]->IsNumber() == false) {
    info.GetIsolate()->ThrowException(Nan::New("Function parameter x type mismatch: Expected Number").ToLocalChecked());
    return;
  }
  // Ensure y is a Number
  if (info[1]->IsNumber() == false) {
    info.GetIsolate()->ThrowException(Nan::New("Function parameter y type mismatch: Expected Number").ToLocalChecked());
    return;
  }
  // Try to get parameters from the VM
  double _x;
  v8::MaybeLocal<v8::Number> _xMaybe = info[0]->Value();
  if (!_xMaybe.IsEmpty()) {
    _x = _xMaybe.ToLocalChecked().Value();
  } else {
    info.GetIsolate()->ThrowException(Nan::New("Function parameter x is empty: Expected Number").ToLocalChecked());
    return;
  }
  double _y;
  v8::MaybeLocal<v8::Number> _yMaybe = info[1]->Value();
  if (!_yMaybe.IsEmpty()) {
    _y = _yMaybe.ToLocalChecked().Value();
  } else {
    info.GetIsolate()->ThrowException(Nan::New("Function parameter y is empty: Expected Number").ToLocalChecked());
    return;
  }
  // Call bound method
  info.GetReturnValue().Set(addition(_x, _y));
}
