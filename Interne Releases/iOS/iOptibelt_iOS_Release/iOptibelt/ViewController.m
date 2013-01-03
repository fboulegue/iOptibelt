//
//  ViewController.m
//  iOptibelt
//
//  Created by Fabian Boulegue on 03.10.11.
//  Copyright (c) 2011 __MyCompanyName__. All rights reserved.
//

#import "ViewController.h"

@implementation ViewController





- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Release any cached data, images, etc that aren't in use.
}

#pragma mark - View lifecycle
//Internet Connection Alert
-(void)webview:(UIWebView *)webview didFailLoadWIthError:(NSError *)error {
    UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"Error" message:@"Internet Connection Problem" delegate:self cancelButtonTitle:@"OK" otherButtonTitles:nil];
    NSLog(@"Problem");
    [alert show];
    [alert release]; }

- (void)viewDidLoad
{
    [super viewDidLoad];
        
    
    
    //Stop Bounce for WebView
    for (id subview in webview.subviews)
        if ([[subview class] isSubclassOfClass: [UIScrollView class]])
            ((UIScrollView *)subview).bounces = NO;
    
    
    
    //First Start Alert
    [alert_start show];
    NSLog(@"first alert"); 
    NSString *start_alert = [[NSUserDefaults standardUserDefaults] objectForKey:@"alert_start"];
    if(start_alert == nil)
    {
        [[NSUserDefaults standardUserDefaults] setValue:@"1" forKey:@"alert_start"];
        [[NSUserDefaults standardUserDefaults] synchronize];
        
        UIAlertView *alert_start = [[UIAlertView alloc] initWithTitle:@"iOptibelt" 
                                                              message:@"On some points this application need a internet connection." 
                                                             delegate:self 
                                                    cancelButtonTitle:@"OK"
                                                    otherButtonTitles:nil];

        [alert_start show];
        [alert_start release];
        
    }

    
// Do any additional setup after loading the view, typically from a nib.
    [webview loadRequest:[NSURLRequest requestWithURL:[NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"home-de" ofType:@"html"]isDirectory:NO]]];
     NSLog(@"webview fertig");
//check every secound for loading
    [NSTimer scheduledTimerWithTimeInterval:1.0 target:self selector:@selector(checkLoad) userInfo:nil repeats:YES];
//check every secound for !loading
    [NSTimer scheduledTimerWithTimeInterval:1.0 target:self selector:@selector(checkNotLoad) userInfo:nil repeats:YES];
//check every secound for !loading
//    [NSTimer scheduledTimerWithTimeInterval:1.0 target:self selector:@selector(didFailLoadWIthError) userInfo:nil repeats:YES];
    
}
//Activity Indicator animate
-(void) checkLoad {if (webview.loading){ 
    [active startAnimating]; NSLog(@"lade");
    }
}
//Activity Indicator !animate
-(void) checkNotLoad {if (!(webview.loading)){
    [active stopAnimating]; NSLog(@"lade nicht");
    }
}
/* ACTIVITY INDICATOR UND ALERT
-(void)webViewDidStartLoad:(UIWebView *) webview {  
    [UIApplication sharedApplication].networkActivityIndicatorVisible = YES;
    [active startAnimating];
    NSLog(@"lade"); 
}
-(void)webViewDidFinishLoad:(UIWebView *) webview { 
    [UIApplication sharedApplication].networkActivityIndicatorVisible = NO;
    [active stopAnimating];
    NSLog(@"fertig"); 
    
}

-(void)webView: (UIWebView *) webview didFailLoadWithError:(NSError *)error{
     NSLog(@"lade error");     
    UIAlertView *alert_error = [[UIAlertView alloc] initWithTitle:@"Error" message:@"Can't connect. Please check your internet Connection" delegate:self cancelButtonTitle:@"OK" otherButtonTitles:nil];
    [alert_error show];
    [alert_error release];
    
};*/


//- (IBAction)tele_button:(id)sender;{
//    [[UIApplication sharedApplication] openU RL:[NSURL URLWithString:@"tel://00000000"]];

- (IBAction)tele_button:(id)sender{
    NSLog(@"it's connected!");
   
    //Direct Call Button
    //[[UIApplication sharedApplication] openURL:[NSURL URLWithString:@"http://mobile.optibelt.com/iphone/footer_telefon.php"]];
     
    //Server-HTML Call Page
    // NSURLRequest *theRequest = [NSURLRequest requestWithURL:[NSURL URLWithString: @"http://mobile.optibelt.com/iphone/footer_telefon.php"]];
    // [self->webview loadRequest:theRequest];
    
    //Local HTML Call Button
    NSURLRequest *theRequest = [NSURLRequest requestWithURL:[NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"phone" ofType:@"html"]isDirectory:NO]];
    [webview loadRequest:theRequest]; 
}




- (IBAction)mail_button:(id)sender{
    NSLog(@"it's connected!");
    //Mail App Mail Button
    [[UIApplication sharedApplication] openURL:[NSURL URLWithString:@"mailto://info@optibelt.com"]];
}
- (IBAction)web_button:(id)sender{
    NSLog(@"it's connected!");
    //Safari Link Button
    //[[UIApplication sharedApplication] openURL:[NSURL URLWithString: @"http://mobile.optibelt.com/iphone/news.php"]];
    
    //Local HTML Button
    NSURLRequest *theRequest = [NSURLRequest requestWithURL:[NSURL URLWithString: @"http://optibelt.com"]];
    [webview loadRequest:theRequest]; 
}

- (IBAction)news_button:(id)sender{
    NSLog(@"it's connected!");
    //local Home Button
    NSURLRequest *theRequest = [NSURLRequest requestWithURL:[NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"home-de" ofType:@"html"]isDirectory:NO]];
    [webview loadRequest:theRequest]; 
}


- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
    // e.g. self.myOutlet = nil;
}

- (void)viewWillAppear:(BOOL)animated
{
    [super viewWillAppear:animated];
}

- (void)viewDidAppear:(BOOL)animated
{
    [super viewDidAppear:animated];
}

- (void)viewWillDisappear:(BOOL)animated
{
	[super viewWillDisappear:animated];
}

- (void)viewDidDisappear:(BOOL)animated
{
	[super viewDidDisappear:animated];
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    // Return YES for supported orientations
    return (interfaceOrientation != UIInterfaceOrientationPortraitUpsideDown);
}

@end
