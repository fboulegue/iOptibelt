//
//  ViewController.h
//  test_1
//
//  Created by fabian boulegue on 24.09.11.
//  Copyright (c) 2011 __MyCompanyName__. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ViewController : UIViewController {
    IBOutlet UIWebView *webview;
    IBOutlet UIActivityIndicatorView *active;
    UIAlertView *alert_start;   
    UIAlertView *error;   

}



-(IBAction)tele_button:(id)sender;
-(IBAction)mail_button:(id)sender;
-(IBAction)web_button:(id)sender;
-(IBAction)news_button:(id)sender;


@end
